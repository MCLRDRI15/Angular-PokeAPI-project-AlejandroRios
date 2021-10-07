import { MatDialogConfig } from '@angular/material/dialog';
import { PokemonDialogData } from 'src/app/modules/pokemon/interfaces/pokemon-dialog-data';

export class PokemonDialog {
  constructor() { }

  static defaultDialogConfig(): MatDialogConfig<PokemonDialogData> {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80vw';
    dialogConfig.maxWidth = '70rem';
    return dialogConfig;
  }
}
