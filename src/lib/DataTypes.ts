export interface IFootage {
	title: string;
	videoUrl: string;
}

export interface ITip {
	title: string;
	content: string;
	category: string;
}

export interface IMentor {
	name: string;
	avatar: string;
	about: string;
}

export interface ITimer {
	name: string;
	duration: number;
	category: string;
}

export interface ISchedule {
	name: string;
	endDate: string;
	tasks: ITask[];
}

export interface ITask {
	name: string;
	duration: string;
	order: number;
}
