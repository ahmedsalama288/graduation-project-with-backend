import { serverDomainName } from "./constants";
import {
  AcademicLeadersData,
  EstablishmentOfTheInstituteData,
  InstituteRegulationsData,
  MainPageData,
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
