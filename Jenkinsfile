pipeline {
  agent none
  stages {
    stage('Build') {
      agent {
        docker {
          image 'node:12-alpine'
        }
      }
      steps {
        sh 'rm -rf node_modules && npm install'
        sh './build.sh'
      }
    }
  }
}
