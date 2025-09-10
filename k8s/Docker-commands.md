### Build container image

`docker build -t bytebank:latest .`
`docker build -t bytebank-investments:latest .`
`docker build -t bytebank-api:latest .`

### Tag container image

`docker tag bytebank:latest rukovis/bytebank:latest`
`docker tag bytebank-investments:latest rukovis/bytebank-investments:latest`
`docker tag bytebank-api:latest rukovis/bytebank-api:latest`

### Docker Hub login

`docker login`

### Push container image

`docker push rukovis/bytebank:latest`
`docker push rukovis/bytebank-investments:latest`
`docker push rukovis/bytebank-api:latest`

### Run container with specific image and port mapping

`docker run -p 3000:3000 bytebank:latest`
`docker run -p 3001:3000 bytebank-investments:latest`
`docker run -p 3002:3000 bytebank-api:latest`

### Docker compose

`docker compose up -d`