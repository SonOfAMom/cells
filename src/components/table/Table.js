import {CellsComponent} from '@core/CellsComponent';

export class Table extends CellsComponent {
  static className = 'cells__table';

  toHTML() {
    return `
            <div class="row">
                <div class="row-info"></div>
                <div class="row-data">
                    <div class="column">
                        A
                    </div>
                    <div class="column">
                        B
                    </div>
                    <div class="column">
                        C
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="row-info">
                    1
                </div>

                <div class="row-data">
                    <div class="cell">15</div>
                    <div class="cell selected" contenteditable>23</div>
                    <div class="cell">38</div>
                </div>
            </div>

            <div class="row">
                <div class="row-info">
                    2
                </div>

                <div class="row-data">
                    <div class="cell">15</div>
                    <div class="cell">23</div>
                    <div class="cell">38</div>
                </div>
            </div>
    `;
  }
}
