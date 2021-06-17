module.exports = {
    previewTypeConfiguration: {
        previewType: 'compiled',
    },
    scripts: {
        install: {
            title: 'Install',
            description: 'Run install',
            command: 'npm i',
            trigger: ['pull', 'checkout', 'setup']
        }
    },
}