package com.jdam.task_api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;

//Esto es para desabilitar la seguridqad cont tokens para pruebas
// ya que por el momento no utilizo tokens y springboot me pide un token de autentifiacion
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable() // desactiva protección CSRF
                .authorizeHttpRequests()
                .anyRequest().permitAll(); // permite todos los endpoints sin autenticación

        return http.build();
    }
}
