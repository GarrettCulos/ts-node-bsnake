import winston, { Logger, transports } from 'winston';
import { ENVIRONMENT } from './secrets';

// const myFormat = printf( (info) => {
//     return `${info.level} ${info.timestamp} [${info.label}]: ${info.message}`;
// });

// const myFormatDb = printf( (info) => {
//     return `${info.timestamp}: ${info.message}`;
// });

const myLevels = {
	levels: {
		emerg: 0,
		crit: 1,
		error: 2,
		warning: 3,
		notice: 4,
		info: 5,
		debug: 6,
		db: 7
	},
	colors: {
		emerg: 'magenta',
		crit: 'red',
		error: 'red',
		warning: 'yellow',
		notice: 'green',
		info: 'green',
		debug: 'grey',
		db: 'grey'
	}
};

export const logger = new Logger({
	level: 'debug',
	levels: myLevels.levels,
	transports: [
		new transports.Console({name: 'console'}),
		// new (winston.transports.File)({ name: 'error', filename: `${LOG_DIR}/error.log`, level: 'emerg' }),
		// new (winston.transports.File)({ name: 'crit', filename: `${LOG_DIR}/crit.log`, level: 'crit' }),
		// new (winston.transports.File)({ name: 'error', filename: `${LOG_DIR}/error.log`, level: 'error' }),
		// new (winston.transports.File)({ name: 'warning', filename: `${LOG_DIR}/warning.log`, level: 'warning' }),
		// new (winston.transports.File)({ name: 'notice', filename: `${LOG_DIR}/notice.log`, level: 'notice' }),
		// new (winston.transports.File)({ name: 'info', filename: `${LOG_DIR}/info.log`, level: 'info' }),
		// new (winston.transports.File)({ name: 'debug', filename: `${LOG_DIR}/debug.log`, level: 'debug' }),
		new transports.File({ filename: `${__dirname}/../../log/console.log` })
	]
});


export const db_logger = new Logger({
	level: 'db',
	levels: myLevels.levels,
	transports: [
		 new transports.File({ filename: `${__dirname}/../../log/database.log`, level: 'db' })
	]
});

// winston.addColors(myLevels);

if (process.env.NODE_ENV !== 'production') {
	logger.debug('Logging initialized at debug level');
}
