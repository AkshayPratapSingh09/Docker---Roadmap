
# Docker Tutorials

Docker is a concept of Virtualization a whole environment for mantaining cosistency and isolation within apps which consist of  Containers, Volumes and Images 

- Images - Small OS (without Kernal)
- Volume - Acts as Storage for The containers
- Container - Gives a sandbox Environment for Complex App


## Tutorial and Commands

- Firstly we must have docker installed in our System
- Now we can access the Docker using CMD / Shell

### First we should pull and Image 
<>All Info in the Documnetation</>

### pull  (This is download app image->app  tag->version)
```
Docker pull <ImageName>:<tag>
``` 
### ps / ls  (To list Container / Volumes / Images)
```
Docker container ps
``` 
```
Docker image ls
``` 
```
Docker volume ls
``` 
### run  (Main cmd to run the container)
```
Docker run (argument from below)
``` 
### --it  (Interactive Mode (directly connect to shell of Cont.))
```
--it
``` 
### prune  (This will delete all the content from the ref.)
```
Docker container prune
``` 
```
Docker images prune
``` 
```
Docker volume prune
``` 
### - logs (to get the logs of the Container)
```
docker logs <container-name>
``` 
### name
```
--name <some_name>
``` 
### -d (detach mode to not stick the app to shell)
```
-d
``` 
### --net  (For Putting multiple apps on same network)
```
--net some-network
``` 
### --p  (For Bridging the ports)
```
-p <OurPort>:<HostPort>
``` 
### -e  (For Providing Environment Variables)
```
-e <VariableName>:<VariableValue>
``` 
### -e  (For Providing Environment Variables)
```
-e <VariableName>:<VariableValue>
``` 
## Docker Compose
- Used to Combine multiple Container
- Automate the Container

### Firstly we must make some file named with docker-compose.yml or yaml


- `version` - Giving  Version of Docker compose
- `services` - Containers we are adding
- `mongodb` - First Container name assign
- `image` - Main image that will be pulled
- `ports` - Port Mapping
- `environment` - declare environment variable

- `mongo-expres` - Second Container we are Adding
- _____ Same as Above ⬆️ ______
```
version: '3'
services:
  mongodb:
    image: mongo
    ports:
      - "27017:27017"
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=pass

  mongo-expres:
    image: mongo-express
    restart: always
    ports:
      - "8081:8081"
    environment:
      - ME_CONFIG_MONGODB_ADMINUSERNAME=admin 
      - ME_CONFIG_MONGODB_ADMINPASSWORD=pass 
      - ME_CONFIG_MONGODB_SERVER=mongodb 

```

### Once the file is Made we should execute it by :
```
docker-compose -f docker-compose.yaml
```

### Now to start the docker made by docker compose 
```
docker-compose -f docker-compose.yaml up
```
### To stop the docker made by docker compose 
```
docker-compose -f docker-compose.yaml down
```

## Creating Docker file
- For reducing the hassle for typing everything on shell and automating it via a file we use this `Dockerfile`

- Firstly Create a File with name Extension named `Dockerfile`

- `python`:`3-alpine3.15` is the image and tag(version) 
- `WORKDIR` is the main working directory
- `COPY` is the command to copy the file (source, destination)
- `EXPOSE` it will map the port 
- `RUN` it will run the commands Assigned
- `CMD` it will also run the cmd in shell

---
> **_📝NOTE:_**  The order is very important. The commands results are cached and once executed no need to re run it until it is updated
---

```
FROM python:3-alpine3.15
WORKDIR /app
COPY . /app
RUN pip install -r requirements.txt
EXPOSE 3000
CMD python ./app.py
```

### Some Alternatives to Docker :
- AWS ECR (Elastic Container Registry)
- Azure Container Registry
- Harbor

## 🚀 About Me
I'm a full stack developer...

