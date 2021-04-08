pipeline {
    agent {
        docker 'node:lts-alpine3.10'
    }
    stages {
        stage('Install packages') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Test') {
            parallel {
                stage('Unit test') {
                    steps { sh 'npm run test' }
                }
                stage('e2e test') {
                    steps { sh 'npm run e2e' }
                }
            }
        }
    }
}