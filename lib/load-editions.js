import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from 'remark';
import html from 'remark-html';

const editionsDirectory = path.join(process.cwd(), "editions");

export async function getAllEditionsData() {
	// console.log(editionsDirectory);
	// Get folders names under /editions
	const foldersNames = fs
		.readdirSync(editionsDirectory, { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => {
			// console.log(dirent);

			const directory = dirent.name;
			const directoryPath = path.join(editionsDirectory, dirent.name);

			// Read info.md file
			const infoPath = path.join(directoryPath, "info.md");
			const fileContents = fs.readFileSync(infoPath, "utf8");
			const infoData = matter(fileContents);

			const folderFiles = fs.readdirSync(directoryPath);

			return {
				directory,
				path: directoryPath,
				info: infoData.data,
				folderFiles,
			};
		});

	// console.log(foldersNames);

	return foldersNames;
}

export function getAllEditionsId() {
	const editionsId = fs
		.readdirSync(editionsDirectory, { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => {
			return dirent.name;
		});
	return editionsId.map((edition) => {
		return {
			params: {
				edition,
			},
		};
	});
}

export async function getEditionData(edition) {
	const editionPath = path.join(editionsDirectory, edition);

	const fullPath = path.join(editionsDirectory, edition, `info.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const matterResult = matter(fileContents);

	const calendarPath = path.join(editionsDirectory, edition, "calendar.md");
	const calendarContents = fs.readFileSync(calendarPath, "utf8");	
	const calendar = matter(calendarContents);

	const studentsPath = path.join(editionsDirectory, edition, "students.md");
	const studentsContents = fs.readFileSync(studentsPath, "utf8");	
	const students = matter(studentsContents);

	const projectsPath = path.join(editionsDirectory, edition, "group-projects.md");
	const projectsContents = fs.readFileSync(projectsPath, "utf8");
	const projects = matter(projectsContents);

	// Combine the data with the id
	return {
		edition,
		calendar: calendar.data,
		students: students.data,
		groupProjects: projects.data,
		...matterResult.data,
	};
}
