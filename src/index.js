import {Cells} from '@/components/cells/Cells';
import {Header} from '@/components/header/Header';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Formula} from '@/components/formula/Formula';
import {Table} from '@/components/table/Table';
import './scss/index.scss';


const cells = new Cells('#app', {
  components: [Header, Toolbar, Formula, Table],
});

cells.render();
