FROM eclipse-temurin:21-jdk

WORKDIR /app

# Copy Copy ONLY pre-built JAR
COPY target/*.jar app.jar

# Use Render's PORT 
EXPOSE ${PORT:-10000}

ENTRYPOINT ["sh", "-c", "java -jar /app/app.jar"]
