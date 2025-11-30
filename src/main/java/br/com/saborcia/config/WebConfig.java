package br.com.saborcia.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Path;

/**
 * Configuração para servir arquivos estáticos.
 * Demonstra o uso de configuração Spring.
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Servir arquivos estáticos
        registry.addResourceHandler("/**")
                .addResourceLocations("classpath:/static/");
        
        // Servir imagens enviadas pelo usuário
        String uploadPath = Path.of("uploads/images").toAbsolutePath().toString();
        registry.addResourceHandler("/uploads/images/**")
                .addResourceLocations("file:" + uploadPath + "/");
    }
}

