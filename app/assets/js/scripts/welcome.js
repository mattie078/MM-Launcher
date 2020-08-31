/**
 * Script for welcome.ejs
 */
document.getElementById("welcomeButton").addEventListener("click", (e) => {
  switchView(VIEWS.welcome, VIEWS.login);
  addMetric("setups");
  if (hasRPC) {
    DiscordWrapper.updateDetails("Adding an Account...");
    DiscordWrapper.updateState("Launcher Setup");
  }
});
