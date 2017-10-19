import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CorpusComponent } from './corpus/corpus.component';
import { ImageTaggerComponent } from './image-tagger/image-tagger.component';

const routes : Routes = [
  { path: "corpus/:id", component: CorpusComponent},
  { path: "image/:cid/:iid", component: ImageTaggerComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRouterModule {}
