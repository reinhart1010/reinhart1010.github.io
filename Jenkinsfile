def cvRepoComplete = true;

pipeline {
    agent {
        label 'jocelyne-asus||reinhart-pc1||reinhart-pc2'
    }
    stages {
        stage('Initialize workspace directory'){
            steps {
                dir ('github'){
                    git branch: 'master', changelog: false, credentialsId: '65b57eb1-4c1f-4b0d-aabf-1e924949b4e5', poll: false, url: 'git@github.com:reinhart1010/reinhart1010.github.io'
                }
            }
        }
        stage('Install dependencies'){
            steps {
                dir('github'){
                    script {
                        if (isUnix()) {
                            sh "bundle update && bundle install"
                        } else {
                            bat "bundle update && bundle install"
                        }
                    }
                }
            }
        }
        stage('Build'){
            steps {
                dir('github'){
                    script {
                        if (isUnix()) {
                            sh "bundle exec jekyll build"
                        } else {
                            bat "bundle exec jekyll build"
                        }
                    }
                }
            }
        }
        stage('Commit builds to GitHub'){
            steps {
                dir('common-text'){
                    script {
                        if (isUnix()) {
                            sh "git config user.name \"Reinhart Previano Koentjoro\""
                            sh "git config user.email \"reinhart_previano@yahoo.com\""
                            sh "git add * && git commit -m \"Data Update " + new Date().format("yyMMdd.HHmm", TimeZone.getTimeZone('UTC')) + "\" && git push origin master"
                        } else {
                            bat "git config user.name \"Reinhart Previano Koentjoro\""
                            bat "git config user.email \"reinhart_previano@yahoo.com\""
                            bat "git add * && git commit -m \"Data Update " + new Date().format("yyMMdd.HHmm", TimeZone.getTimeZone('UTC')) + "\" && git push origin master"
                        }
                    }
                }
            }
        }
    }
}