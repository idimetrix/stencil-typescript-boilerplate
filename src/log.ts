import { Logger } from 'logvis';

const log: Logger = new Logger('MTS');

process.env.NODE_ENV !== 'production' ? log.enableAll() : log.disableAll();

export default log;
