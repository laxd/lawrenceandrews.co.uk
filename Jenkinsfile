pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        tool name: 'NodeJS', type: 'nodejs'
        sh './build.sh'
      }
    }
    stage('Deploy') {
      steps {
        ftpPublisher alwaysPublishFromMaster: false, continueOnError: false, failOnError: false, publishers: [[configName: 'lawrenceandrews.co.uk FTP', transfers: [[asciiMode: false, cleanRemote: false, excludes: '', flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '/', remoteDirectorySDF: false, removePrefix: 'out/', sourceFiles: 'out/*']], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false]]             
      }
    }
  }
}
