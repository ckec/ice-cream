pipeline {
    agent {
        docker {
            image 'node:lts-alpine3.10'
            args '--privileged -v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    stages {
        stage('Install dependencies'){
            steps { sh 'yarn install'}
        }
        stage ('Tests / Quality / Format'){
              parallel{
                       stage('prettier'){steps { sh 'npm run format:check .'}}
                       stage('Lint'){steps { sh 'npm run lint'}}
                       stage('Unit Tests'){steps { sh 'npm run test'}}
                       stage('E2E Tests'){steps { sh 'npm run e2e'}}
              }
        }
        stage('Build'){steps { sh 'npm run build:prod'}}
        stage('Deploy'){steps { sh 'npm run e2e'}}
    }
}
