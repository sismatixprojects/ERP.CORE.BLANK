# Use the official ASP.NET Core runtime image

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base

# Set the working directory
#RUN mkdir -p /app

WORKDIR /app

# Copy the current directory contents into the container

COPY . .

#VOLUME /app/ERPUpload

# Expose port 5000

EXPOSE 5000

# Specify the entry point to run your application

ENTRYPOINT ["dotnet", "API.dll", "--urls", "http://0.0.0.0:5000"]
