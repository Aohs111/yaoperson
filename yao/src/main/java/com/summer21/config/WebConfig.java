package com.summer21.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Paths;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // 获取当前工作目录
        String currentPath = System.getProperty("user.dir");
        // 添加images目录作为资源处理器
        String imagePath = Paths.get(currentPath, "images").toAbsolutePath().toString();
        
        registry.addResourceHandler("/images/**")
                .addResourceLocations("file:" + imagePath + "/");
    }
} 