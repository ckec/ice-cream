pipeline {
    agent {
        docker {
          image 'node:lts-alpine3.10'
          args '-u root --privileged'
        }
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
