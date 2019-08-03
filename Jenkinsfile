pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        tool 'NodeJS'
        sh 'lessc src/less/style.less html/css/style.css'
      }
    }
  }
}