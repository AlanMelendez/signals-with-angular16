$ ng g @schematics/angular:module signals --module app --route signals


$ ng g @schematics/angular:component signals/layout/signalsLayout --skip-selector

ng g @schematics/angular:component signals/pages/counterPage --skip-selector &&
ng g @schematics/angular:component signals/pages/userInfoPage --skip-selector &&
ng g @schematics/angular:component signals/pages/propertiesPage --skip-selector

ng g @schematics/angular:component signals/components/sideMenu --skip-selector
