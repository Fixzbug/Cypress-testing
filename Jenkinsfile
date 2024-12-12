pipeline {
  agent any
  tools {nodejs "Node"}
  stages {
      stage('Dependencies') {
          steps {
              bat 'npm install'
             //   bat 'npm install lambdatest-cypress-cli'
          }
      }
      stage('e2e Tests') {
          steps {
              bat 'npx cypress run'
          }
      }
      stage('Deploy') {
          steps {
              echo 'Deploying....'
          }
      }
  }
}
