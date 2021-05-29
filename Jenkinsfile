pipeline {
  agent none
 
  environment {
    GULP_CMD='./node_modules/.bin/gulp'
  }

  stages {
    stage('Build') {
      agent {
        docker {
          image 'node:12-alpine'
        }
      }
      steps {
        sh 'npm install && npm run build'

        archiveArtifacts 'bin/**'
      }
    }
  }
}
