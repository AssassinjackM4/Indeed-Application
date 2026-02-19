FROM eclipse-temurin:21-jdk

WORKDIR /app

# Copy ENTIRE backend folder (includes .mvn/)
COPY . .

#  Make mvnw executable  
RUN chmod +x mvnw

# Build JAR
RUN ./mvnw clean package -DskipTests
RUN mv target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/app.jar"]
