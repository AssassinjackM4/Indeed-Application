FROM eclipse-temurin:21-jdk

WORKDIR /app

# Copy pre-built JAR only 
COPY target/*.jar app.jar

# Use Render's PORT (not hardcoded 8080)
EXPOSE ${PORT:-10000}

# Pass ALL Render ENV vars to Spring Boot
ENTRYPOINT ["sh", "-c", "java -jar /app/app.jar"]
