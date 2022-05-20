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

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents);

	// Use remark to convert markdown strings into HTML string
  const syllabusText = await remark()
    .use(html)
    .process(matterResult.data["syllabus-text"]);
  const syllabusTextHtml = syllabusText.toString();

	const assignmentsText = await remark()
    .use(html)
    .process(matterResult.data["assignments-text"]);
  const assignmentsTextHtml = assignmentsText.toString();

	const caseStudiesText = await remark()
    .use(html)
    .process(matterResult.data["case-studies-text"]);
  const caseStudiesTextHtml = caseStudiesText.toString();

	const teamProjectsText = await remark()
    .use(html)
    .process(matterResult.data["team-projects-text"]);
  const teamProjectsTextHtml = teamProjectsText.toString();

	const calendarPath = path.join(editionsDirectory, edition, "calendar.json");
	const calendarContents = fs.readFileSync(calendarPath, "utf8");
	const calendar = JSON.parse(calendarContents);

	// Combine the data with the id
	return {
		edition,
		calendar,
		syllabusTextHtml,
		assignmentsTextHtml,
		caseStudiesTextHtml,
		teamProjectsTextHtml,
		...matterResult.data,
	};
}
