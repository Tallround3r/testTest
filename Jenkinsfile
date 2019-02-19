pipeline {
    agent any
    stages {
        stage('Build') {
          steps {
            withEnv(['http_proxy=http://proxy01-ka.noc.fiducia.de:8080', 'https_proxy=http://proxy01-ka.noc.fiducia.de:8080']) {
              withDockerServer([credentialsId: "swarm-certs", uri: "tcp://10.2.181.249:2376"]) {
                echo 'building'
                sh 'docker build -t tim/ausredenbingo .'
              }
            }
          }
        }
      }
}