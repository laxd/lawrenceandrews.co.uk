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
        sh 'npm install'
        sh './build.sh'
      }
    }
  }
}
