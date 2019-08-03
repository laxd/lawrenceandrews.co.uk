pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        tool(name: 'lessc', type: 'lessc')
        sh 'lessc src/less/style.less html/css/style.css'
      }
    }
  }
}