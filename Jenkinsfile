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
        sh 'npm install'
        sh 'gulp js css'

        archiveArtifacts 'css/*, js/*, images/*, index.html'
      }
    }
  }
}
