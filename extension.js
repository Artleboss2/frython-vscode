// Extension Frython pour VS Code
// Activation minimale — la coloration syntaxique est gérée par le grammar

/**
 * @param {import('vscode').ExtensionContext} context
 */
function activate(context) {
    console.log('🐓 Frython extension activée!');
}

function deactivate() {}

module.exports = { activate, deactivate };
