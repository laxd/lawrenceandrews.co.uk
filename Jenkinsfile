pipeline {
  agent none
 
  environment {
    LESS_CMD='./node_modules/.bin/lessc'
  }

  stages {
    stage('Build') {
      agent {
        docker {
          image 'node:12-alpine'
        }
      }
      steps {
        sh 'rm -rf node_modules && npm install'
        sh '$LESS_CMD src/less/style.less out/css/style.css'
        sh 'cp src/html/* out/'
      }
    }
  }
}
