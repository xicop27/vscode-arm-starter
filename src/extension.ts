import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const cmd = vscode.commands.registerCommand(
    'arm-starter.createProject',
    async () => {
      vscode.window.showInformationMessage('Hello, ARM! 🚀');
    }
  );
  context.subscriptions.push(cmd);
}

export function deactivate() {}
