import { serverDomainName } from "./constants";
import {
  AcademicLeadersData,
  EstablishmentOfTheInstituteData,
  InstituteDepartmentData,
  InstituteRegulationsData,
  MainPageData,
  StudentClassSchedules,
  StudentExamSchedules,
  UnitsAndDepartmentsData,
  VisionMissionGoalsData,
} from "./definitions";

export async function fetchMainPageData() {
  try {
    const response = await fetch(
      `${serverDomainName}/api/dashboard/main-page`,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
    if (!response.ok) throw new Error("Failed to fetch MainPageData data.");

    const { data } = await response.json();

    const {
      title,
      our_goals: ourGoals,
      students_number: studentsNumber,
      graduated_students: graduatedStudents,
      common_questions: commonQuestions,
    } = data;

    const mainPageData: MainPageData = {
      title,
      ourGoals,
      studentsNumber,
      graduatedStudents,
      commonQuestions,
    };

    return mainPageData;
  } catch (error) {
    throw new Error("Failed to fetch MainPageData data.");
  }
}

export async function fetchEstablishmentOfTheInstituteData() {
  try {
    const response = await fetch(
      `${serverDomainName}/api/dashboard/institute-created-at/get`,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
    if (!response.ok)
      throw new Error("Failed to fetch establishment-of-the-Institute data.");

    const { data }: { data: EstablishmentOfTheInstituteData } =
      await response.json();

    return data;
  } catch (error) {
    throw new Error("Failed to fetch establishment-of-the-Institute data.");
  }
}

export async function fetchVisionMissionGoals() {
  try {
    const response = await fetch(
      `${serverDomainName}/api/dashboard/vision-mission-goals/get`,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
    if (!response.ok)
      throw new Error("Failed to fetch vision-mission-goals data.");

    const { data }: { data: VisionMissionGoalsData } = await response.json();

    return data;
  } catch (error) {
    throw new Error("Failed to fetch vision-mission-goals data.");
  }
}

export async function fetchAcademicLeadersData() {
  try {
    const response = await fetch(
      `${serverDomainName}/api/dashboard/academic-and-administrative-leaders/get`,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
    if (!response.ok)
      throw new Error(
        "Failed to fetch academic-and-administrative-leaders data."
      );

    const { data }: { data: AcademicLeadersData } = await response.json();

    return data;
  } catch (error) {
    throw new Error(
      "Failed to fetch academic-and-administrative-leaders data."
    );
  }
}

export async function fetchOrganizationalChartImage() {
  try {
    const response = await fetch(
      `${serverDomainName}/api/dashboard/organizational-chart/get`,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
    if (!response.ok)
      throw new Error("Failed to fetch organizational-chart data.");

    const { data }: { data: string } = await response.json();

    return data;
  } catch (error) {
    throw new Error("Failed to fetch organizational-chart data.");
  }
}

export async function fetchInstituteRegulationsFileLinks() {
  try {
    const response = await fetch(
      `${serverDomainName}/api/dashboard/institute-regulations/get`,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
    if (!response.ok)
      throw new Error("Failed to fetch organizational-chart data.");

    const { data } = await response.json();

    const { new_regulation: newRegulation, old_regulation: oldRegulation } =
      data;

    const InstituteRegulationsFiles: InstituteRegulationsData = {
      newRegulation,
      oldRegulation,
    };

    return InstituteRegulationsFiles;
  } catch (error) {
    throw new Error("Failed to fetch organizational-chart data.");
  }
}

export async function fetchClassSchedules() {
  try {
    const response = await fetch(
      `${serverDomainName}/api/dashboard/class-schedules/get`,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
    if (!response.ok) throw new Error("Failed to fetch class-schedules data.");

    const { data } = await response.json();
    const {
      first_class_schedule: firstPdfSchedule,
      second_class_schedule: secondPdfSchedule,
      third_class_schedule: theadPdfSchedule,
      fourth_class_schedule: fourthPdfSchedule,
    } = data;

    const studentClassSchedules: StudentClassSchedules = {
      firstPdfSchedule,
      secondPdfSchedule,
      theadPdfSchedule,
      fourthPdfSchedule,
    };

    return studentClassSchedules;
  } catch (error) {
    throw new Error("Failed to fetch class-schedules data.");
  }
}

export async function fetchExamSchedules() {
  try {
    const response = await fetch(
      `${serverDomainName}/api/dashboard/exam-schedules/get`,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
    if (!response.ok) throw new Error("Failed to fetch exam-schedules data.");

    const { data } = await response.json();
    const {
      first_class_schedule: firstPdfSchedule,
      second_class_schedule: secondPdfSchedule,
      third_class_schedule: theadPdfSchedule,
      fourth_class_schedule: fourthPdfSchedule,
    } = data;

    const studentExamSchedules: StudentExamSchedules = {
      firstPdfSchedule,
      secondPdfSchedule,
      theadPdfSchedule,
      fourthPdfSchedule,
    };

    return studentExamSchedules;
  } catch (error) {
    throw new Error("Failed to fetch exam-schedules data.");
  }
}

export async function fetchDepartmentData(url: string) {
  try {
    const response = await fetch(`${serverDomainName}/api/dashboard/${url}`, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });
    if (!response.ok)
      throw new Error(`Failed to fetch academic-life/${url} data.`);

    const { data } = await response.json();

    const {
      id,
      name: profName,
      image: imageSrc,
      description: dutiesAndMission,
    } = data;

    const instituteDepartmentData: InstituteDepartmentData = {
      id,
      profName,
      imageSrc,
      dutiesAndMission,
    };

    return instituteDepartmentData;
  } catch (error) {
    throw new Error(`Failed to fetch academic-life/${url} data.`);
  }
}

// units-and-departments
export async function fetchUnitsAndDepartmentsData(pageName: string) {
  try {
    const bodyData = {
      page_name: pageName,
    };

    const response = await fetch(
      `${serverDomainName}/api/dashboard/page-based-on-name/get`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify(bodyData),
      }
    );
    if (!response.ok)
      throw new Error(`Failed to fetch units-and-departments/data.`);

    const { data }: { data: UnitsAndDepartmentsData } = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Failed to fetch units-and-departments/data.`);
  }
}
