pipeline {
  agent any
  tools {nodejs "Node"}
  stages {
      stage('Dependencies') {
          steps {
              bat 'npm install'
            //   bat 'npm install cypress --save-dev'
            //   bat 'npm install cypress-multi-reporters --save-dev'
          }
      }
      stage('e2e Tests') {
          steps {
              bat 'npm run cy:run'
          }
      }
  }
}
