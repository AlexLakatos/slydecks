export class App {
  configureRouter(config, router) {
    config.title = 'Alex Lakatos';

    config.map([
      { route: ['', "slides"],         name: 'slides',        moduleId: 'slides',        nav: true, title: 'Slydecks' }
    ]);

    router.title_link = "http://alexlakatos.github.io/";

    this.router = router;
  }
}
