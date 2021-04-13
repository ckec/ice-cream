pipeline {
    agent {
        docker {
            image 'node:lts-alpine3.10'
            args '--privileged -v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    stages {
        stage('Build'){
            steps { sh 'yarn'}
        }
        stage('Unit Tests'){
            steps { sh 'npm run test'}
        }
        stage('E2E Tests'){
            steps { sh 'npm run e2e'}
        }
    }
}
