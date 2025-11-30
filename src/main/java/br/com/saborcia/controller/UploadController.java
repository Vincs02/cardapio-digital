package br.com.saborcia.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

/**
 * Controller para upload de imagens.
 * Demonstra manipulação de arquivos e I/O em Java.
 */
@RestController
@RequestMapping("/api/upload")
@CrossOrigin(origins = "*")
public class UploadController {

    // Diretório onde as imagens serão salvas
    private static final String UPLOAD_DIR = "uploads/images/";

    public UploadController() {
        // Criar diretório se não existir
        try {
            Path uploadPath = Paths.get(UPLOAD_DIR);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }
        } catch (IOException e) {
            System.err.println("Erro ao criar diretório de upload: " + e.getMessage());
        }
    }

    /**
     * Endpoint para fazer upload de imagem
     */
    @PostMapping("/imagem")
    public ResponseEntity<Map<String, String>> uploadImagem(@RequestParam("file") MultipartFile file) {
        Map<String, String> response = new HashMap<>();
        
        try {
            // Validar arquivo
            if (file.isEmpty()) {
                response.put("erro", "Arquivo vazio");
                return ResponseEntity.badRequest().body(response);
            }

            // Validar tipo de arquivo
            String contentType = file.getContentType();
            if (contentType == null || !contentType.startsWith("image/")) {
                response.put("erro", "Arquivo deve ser uma imagem");
                return ResponseEntity.badRequest().body(response);
            }

            // Gerar nome único para o arquivo
            String originalFilename = file.getOriginalFilename();
            String extension = "";
            if (originalFilename != null && originalFilename.contains(".")) {
                extension = originalFilename.substring(originalFilename.lastIndexOf("."));
            }
            String filename = UUID.randomUUID().toString() + extension;

            // Salvar arquivo
            Path filePath = Paths.get(UPLOAD_DIR + filename);
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            // Retornar URL da imagem
            String imageUrl = "/uploads/images/" + filename;
            response.put("url", imageUrl);
            response.put("mensagem", "Imagem enviada com sucesso");

            return ResponseEntity.ok(response);

        } catch (IOException e) {
            response.put("erro", "Erro ao salvar imagem: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}

