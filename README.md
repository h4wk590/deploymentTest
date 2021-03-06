# Code Test

View the app: ```http://40.64.81.25:8080/```.

View the pipeline: ```https://dev.azure.com/aidankappa/BC_Code_Test```

## Deliverables

- Deploy an application to a Kubernetes environment.
- Code should be on Github.
- Deployments to be done 'as code'.
- Create Operational plan to upgrade the application within in a production environment.
- Automate deployment with scripts. (bonus)
- Discuss security vulnerabilties. (bonus)


## Deployment

I am deploying a simple node.js hello world application using Azure Kubernetes Service and Azure Devops for CI/CD. 

Why Azure? I'm familiar with it, and it provides great services to deploy applications. That being said I am more than willing to learn and be taught the specific technical stack in this position.

### Stage 1 - Containerize application and create deployment

The Docker container holds the application files and Node modules in the created '/app' directory. It runs the app on port 8080. I built the Docker image using ```docker build -t test-app1:v1 .```. 

 - Create the Container Registry using the Azure cli with; ```az acr create```.
 - Login to the Container Registry and push the Docker Image created earlier to it.

```docker push codetest.azurecr.io/test-app1:v1```. By tagging the image as v1, it creates a formal document of the version of the image/app.

#### Create AKS cluster

Using az aks cli, I created a two-node cluster. Connected to it with ssh keys (using the ```generate-ssh-keys``` parameters from ```az aks create```) to authenticate to my local kubectl.


#### Building the CI Pipeline 

You can find the build and deploy parameters in the ```azure-pipelines.yml```, ```deployment.yml```, and the ```service.yml``` in the manifests directory. 

This is a simple build that automates what I went over previously: On ```git push``` the Continuous Integration is triggered and the build starts with the Dockerfile, pushing it to the Container Registry, then to the Kubernetes Service, the default load balancer gives the application a public ip endpoint to access. All of this is authenticated with Github secret keys. 


### Stage 2 - New Release Plan

Please see the ```releasePlan.txt``` in the ```docs``` directory to view details. 