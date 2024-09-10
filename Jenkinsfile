pipeline {
  agent any
  triggers {
         githubPush()
    }
  environment {
        AWS_REGION = 'eu-central-1'
        CRED = 'AWS-Account-Access'
        
        ECS_CLUSTER_PROD = 'MatixECS'
        ECS_CLUSTER_TEST = 'MatixECSTest'
       
        ECS_SVC_PROD = 'matix-erp-svc'
        ECS_SVC_TEST = 'matix-erp-test-svc'

        ECR_PROD = '304253485965.dkr.ecr.eu-central-1.amazonaws.com/matixerp'
        ECR_TEST = '304253485965.dkr.ecr.eu-central-1.amazonaws.com/matixerptest'
	HOME = "${env.WORKSPACE}"

    }
    

  stages {
    stage("Build Docker Image_prod") {
            when {
                expression {env.GIT_BRANCH == 'origin/main'}
            }
            
            steps {
                git branch: 'main', url: 'https://github.com/sismatixprojects/ERP.CORE.BLANK.git', credentialsId: 'Github Marifse'
                script {
                    sh "docker build -t ${env.ECR_PROD}:latest -f ./Dockerfile ."
                }
            }
        }
     stage("Build Docker Image_test") {
            when {
                expression {env.GIT_BRANCH == 'origin/test'}
            }

            steps {
                git branch: 'main', url: 'https://github.com/sismatixprojects/ERP.CORE.BLANK.git', credentialsId: 'Gith>                script {
                    sh "docker build -t ${env.ECR_TEST}:latest -f ./Dockerfile ."
                }
            }
        }
          
    stage('Push Docker Image to ECR Prod') {
            when {
                expression {env.GIT_BRANCH == 'origin/main'}

            }
            steps {
                script {
                  withCredentials([usernamePassword(credentialsId: 'aws-access-keys', usernameVariable: 'AWS_ACCESS_KEY_ID', passwordVariable: 'AWS_SECRET_ACCESS_KEY')]) {
                        // Login to ECR
                        sh "aws ecr get-login-password --region ${env.AWS_REGION} | docker login --username AWS --password-stdin ${env.ECR}"

                        // Tag Docker image
                        //sh "docker tag ${env.ECR_PROD}:latest ${URL_REGISTRY}/$ECR:latest"

                        // Push Docker image to ECR
                        sh "docker push ${env.ECR_PROD}:latest"
                    }
                  }
                  
              }

            }

     stage('Push Docker Image to ECR Test') {
            when {
                expression {env.GIT_BRANCH == 'origin/test'}

            }
            steps {
                script {
                  withCredentials([usernamePassword(credentialsId: 'aws-access-keys', usernameVariable: 'AWS_ACCESS_KEY_ID', passwordVariable: 'AWS_SECRET_ACCESS_KEY')]) {
                        // Login to ECR
                        sh "aws ecr get-login-password --region ${env.AWS_REGION} | docker login --username AWS --password-stdin ${env.ECR}"

                        // Tag Docker image
                        //sh "docker tag ${env.ECR_TEST}:latest ${URL_REGISTRY}/$ECR:latest"

                        // Push Docker image to ECR
                        sh "docker push ${env.ECR_TEST}:latest"
                    }
                  }

              }

            }
     
     
         
     stage('Deploying to ECS Prod') {
        when {
                expression {env.GIT_BRANCH == 'origin/main'}
            }
        environment {
                AWS_REGION = "${AWS_REGION}"
                AWS_CREDENTIALS_ID = "${CRED}"
                ECS_CLUSTER = "${ECS_CLUSTER_PROD}"
                ECS_SVC = "${ECS_SVC_PROD}"
            }
      steps {
        deploytoECS()
      }
    }
    stage('Deploying to ECS Test') {
        when {
                expression {env.GIT_BRANCH == 'origin/test'}
            }
        environment {
                AWS_REGION = "${AWS_REGION}"
                AWS_CREDENTIALS_ID = "${CRED}"
                ECS_CLUSTER="${ECS_CLUSTER_TEST}"
                ECS_SVC = "${ECS_SVC_TEST}"
            }
      steps {
        deploytoECS()
      }
    }
  
    

  }
  post {
        always {
            echo 'Deleting all local images'
            sh 'docker image prune -af'
             echo 'Pipeline finished.'
        }
        success {
            echo 'Pipeline succeeded.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}

def deploytoECS(){
  withAWS(region: env.AWS_REGION, credentials: env.AWS_CREDENTIALS_ID){
    sh """
        aws ecs update-service --force-new-deployment --service ${env.ECS_SVC} --cluster ${env.ECS_CLUSTER}
       
     """
  }
}
