import {Home} from "./pages/home.jsx";
import {WhoWeAre} from "./pages/who-we-are.jsx";
import {WhatWeDo} from "./pages/what-we-do.jsx";
import {WorkingWithUsPleasure} from "./pages/working-with-us-pleasure.jsx";
import {AccessControl} from "./pages/inner-pages/electronic-security/access-control.jsx";
import {
    IntrusionDetectionPerimeterProtectionSystems
} from "./pages/inner-pages/electronic-security/intrustion-detection-&-premirmeter-protection-system.jsx";
import {VehicleSurveillanceSystem} from "./pages/inner-pages/electronic-security/vehicle-surveillance-system.jsx";
import {ExplosiveDetectors} from "./pages/inner-pages/electronic-security/explosive-detectors.jsx";
import {TimeAndAttendanceSystems} from "./pages/inner-pages/electronic-security/time-and-attendance-systems.jsx";
import {
    FireDetectionFireFightingSystem
} from "./pages/inner-pages/electronic-security/fire-detection-&-fire-fighting-system.jsx";
import {HeatSmokeDetection} from "./pages/inner-pages/electronic-security/heat-&-smoke-detection.jsx";
import {
    MaintenanceOfPrecisionAirConditionersThermostatAHU
} from "./pages/inner-pages/facility-management/maintenance-of-precision-air-conditioners-thermostat-AHU.jsx";
import {
    ProgrammableNonProgrammableFireAlarmSystem
} from "./pages/inner-pages/electronic-security/programmable-non-programmable-fire-alarm-system.jsx";
import {WaterSprinklers} from "./pages/inner-pages/electronic-security/water-sprinklers.jsx";
import {HydrantWetRiserSystems} from "./pages/inner-pages/electronic-security/hydrant-&-wet-riser-systems.jsx";
import {VRVVAV} from "./pages/inner-pages/facility-management/VRV-VAV.jsx";
import {HSU} from "./pages/inner-pages/facility-management/hsu.jsx";
import {BuildingManagementSystem} from "./pages/inner-pages/facility-management/building-management-system.jsx";
import {AVAndPASystem} from "./pages/inner-pages/facility-management/AV-and-PA-system.jsx";
import {VisitorManagementSystem} from "./pages/inner-pages/facility-management/visitor-management-system.jsx";
import {
    TurnstilesFlapBarrierBoomBarrier
} from "./pages/inner-pages/facility-management/turnstiles-flapBarrier-boomBarrier.jsx";
import {CafeteriaManagement} from "./pages/inner-pages/facility-management/cafeteria-management.jsx";
import {AutomatedParkingManagement} from "./pages/inner-pages/technical-solutions/automated-parking-management.jsx";
import {
    BiometricAttendanceManagementSystems
} from "./pages/inner-pages/technical-solutions/biometric-attendance-management-systems.jsx";
import {
    VehicleManagementThroughGPRSSolutions
} from "./pages/inner-pages/technical-solutions/vehicle-management-through-GPRS-solutions.jsx";
import {FireExtinguishers} from "./pages/inner-pages/electronic-security/fire-extinguishers.jsx";
import {ElectronicSecuritySolutions} from "./pages/electronic-security-solutions.jsx";
import {FacilityManagement} from "./pages/facility-management.jsx";
import {TechnicalSolutions} from "./pages/technical-solutions.jsx";
import {SecurityGuardServices} from "./pages/security-guards.jsx";
import {SoftServices} from "./pages/soft-services.jsx";
import {ThirdPartyPayroll} from "./pages/third-party-payroll.jsx";
import {
    SecurityGuardsAtAccessPoints
} from "./pages/inner-pages/security-guarding/security-guards-at-access-points-to-counter-theft.jsx";
import {BodyGuards} from "./pages/inner-pages/security-guarding/body-guard.jsx";
import {GunMans} from "./pages/inner-pages/security-guarding/gun-mans.jsx";
import {CorporateSecurity} from "./pages/inner-pages/security-guarding/corporate-security.jsx";
import {IndustrialSecurity} from "./pages/inner-pages/security-guarding/industrial-security.jsx";
import {BankSecurity} from "./pages/inner-pages/security-guarding/bank-security.jsx";
import {EventSecurity} from "./pages/inner-pages/security-guarding/event-security.jsx";
import {RetailSecurity} from "./pages/inner-pages/security-guarding/retail-security.jsx";
import {HotelSecurity} from "./pages/inner-pages/security-guarding/hotel-security.jsx";
import {InstitutionalSecurity} from "./pages/inner-pages/security-guarding/institutional-security.jsx";
import {ResidentialSecurity} from "./pages/inner-pages/security-guarding/residential-security.jsx";
import {ExecutiveProtection} from "./pages/inner-pages/security-guarding/executive-protection.jsx";
import {HousekeepingCleaningServices} from "./pages/inner-pages/soft-services/housekeeping-&-cleaning-services.jsx";
import {
    DisinfectingSanitizingServices
} from "./pages/inner-pages/soft-services/disinfecting-and-sanitizing-services.jsx";
import {PestControlService} from "./pages/inner-pages/soft-services/pest-control-service.jsx";
import {PantryServices} from "./pages/inner-pages/soft-services/pantry-services.jsx";
import {FacadeCleaning} from "./pages/inner-pages/soft-services/facade-cleaning.jsx";
import {GuestHouseManagement} from "./pages/inner-pages/soft-services/guest-house-management.jsx";
import {LawnGardenLandscaping} from "./pages/inner-pages/soft-services/lawn-and-garden-landscaping.jsx";
import {EndToEndPayrollManagement} from "./pages/inner-pages/third-party-payroll/end-to-end-payroll-management.jsx";
import {
    ComplianceAndRegulatoryExpertise
} from "./pages/inner-pages/third-party-payroll/compliance-and-regulatory-expertise.jsx";
import {TimeAndResourceOptimization} from "./pages/inner-pages/third-party-payroll/time-and-resource-optimization.jsx";
import {
    AccurateAndTimelyPayrollProcessing
} from "./pages/inner-pages/third-party-payroll/accurate-and-timely-payroll-processing.jsx";
import {StreamlinedHRServices} from "./pages/inner-pages/third-party-payroll/streamlined-HR-services.jsx";
import {
    ExperiencedAndProfessionalTeam
} from "./pages/inner-pages/third-party-payroll/experienced-and-professional-team.jsx";
import {
    FocusOnCoreBusinessFunctions
} from "./pages/inner-pages/third-party-payroll/focus-on-core-business-functions.jsx";

export const navRoutes = [
    {
        name: "home",
        path: "/",
        element: <Home/>,
    },
    {
        name: "who we are",
        path: "/woWeAre",
        element: <WhoWeAre/>,
    },
    {
        name: "what we do",
        path: "/whatWeDo",
        element: <WhatWeDo/>,
    }


];

export const routes = [
    {
        name: "Electronic Security",
        path: "/electronicSecurity",
        element: <ElectronicSecuritySolutions/>
    },
    {
        name: "Facility Management",
        path: "/facilityManagement",
        element: <FacilityManagement/>
    },
    {
        name: "Technical Solutions",
        path: "/technicalSolutions",
        element: <TechnicalSolutions/>
    },
    {
        name: "Security Guarding",
        path: "/securityGuards",
        element: <SecurityGuardServices/>
    },
    {
        name: "Soft Services",
        path: "/softServices",
        element: <SoftServices/>
    },
    {
        name: "Third Party Payroll",
        path: "/thirdPartyPayroll",
        element: <ThirdPartyPayroll/>
    },
    {
        name: "Working with us is a pleasure",
        path: "/workingWithUsIsPleasure",
        element: <WorkingWithUsPleasure/>,
    },
    {
        name: "Security Guards At Access Points",
        path: "/securityGuardsAtAccessPoints",
        element: <SecurityGuardsAtAccessPoints/>
    },
    {
        name: "Body Guards",
        path: "/bodyGuards",
        element: <BodyGuards/>
    },
    {
        name: "Gun Mans",
        path: "/gunMans",
        element: <GunMans/>
    },
    {
        name: "Corporate Security",
        path: "/corporateSecurity",
        element: <CorporateSecurity/>
    },
    {
        name: "Industrial Security",
        path: "/industrialSecurity",
        element: <IndustrialSecurity/>
    },
    {
        name: "Bank Security",
        path: "/bankSecurity",
        element: <BankSecurity/>
    },
    {
        name: "Event Security",
        path: "/eventSecurity",
        element: <EventSecurity/>
    },
    {
        name: "Retail Security",
        path: "/retailSecurity",
        element: <RetailSecurity/>
    },
    {
        name: "Hotel Security",
        path: "/hotelSecurity",
        element: <HotelSecurity/>
    },
    {
        name: "Institutional Security",
        path: "/institutionalSecurity",
        element: <InstitutionalSecurity/>
    },
    {
        name: "Residential Security",
        path: "/residentialSecurity",
        element: <ResidentialSecurity/>
    },
    {
        name: "Executive Protection",
        path: "/executiveProtection",
        element: <ExecutiveProtection/>
    },
    {
        name: "Housekeeping & Cleaning Services",
        path: "/housekeeping&CleaningServices",
        element: <HousekeepingCleaningServices/>
    },
    {
        name: "Disinfecting and Sanitizing Services",
        path: "/disinfectionAndSanitizingServices",
        element: <DisinfectingSanitizingServices/>
    },
    {
        name: "Pest Control Service",
        path: "/pestControlService",
        element: <PestControlService/>
    },
    {
        name: "Pantry Services",
        path: "/pantryServices",
        element: <PantryServices/>
    },
    {
        name: "Facade Cleaning",
        path: "/facadeCleaning",
        element: <FacadeCleaning/>
    },
    {
        name: "Guest House Management",
        path: "/guestHouseManagement",
        element: <GuestHouseManagement/>
    },
    {
        name: "Lawn and Garden Landscaping",
        path: "/lawnAndGardenLandscaping",
        element: <LawnGardenLandscaping/>
    },
    {
        name: "End-to-End Payroll Management",
        path: "/endToEndPayrollManagement",
        element: <EndToEndPayrollManagement/>
    },
    {
        name: "Compliance and Regulatory Expertise",
        path: "/complianceAndRegulatoryExpertise",
        element: <ComplianceAndRegulatoryExpertise/>
    },
    {
        name: "Time and Resource Optimization",
        path: "/timeAndResourceOptimization",
        element: <TimeAndResourceOptimization/>
    },
    {
        name: "Accurate and Timely Payroll Processing",
        path: "/accurateAndTimelyPayrollProcessing",
        element: <AccurateAndTimelyPayrollProcessing/>
    },
    {
        name: "Streamlined HR Services",
        path: "/streamlinedHRServices",
        element: <StreamlinedHRServices/>
    },
    {
        name: "Experienced and Professional Team",
        path: "/experiencedAndProfessionalTeam",
        element: <ExperiencedAndProfessionalTeam/>
    },
    {
        name: "Focus on Core Business Functions",
        path: "/focusOnCoreBusinessFunctions",
        element: <FocusOnCoreBusinessFunctions/>
    },
    {
        name: "Access Control",
        path: "/accessControl",
        element: <AccessControl/>,
    },

    {
        name: "Intrusion Detection & Perimeter Protection Systems",
        path: "/intrusionDetection&PerimeterProtectionSystems",
        element: <IntrusionDetectionPerimeterProtectionSystems/>
    },
    {
        name: "Vehicle Surveillance System",
        path: "/vehicleSurveillanceSystem",
        element: <VehicleSurveillanceSystem/>
    },
    {
        name: "Explosive Detectors",
        path: "/explosiveDetectors",
        element: <ExplosiveDetectors/>
    },
    {
        name: "Time And Attendance Systems",
        path: "/timeAndAttendanceSystems",
        element: <TimeAndAttendanceSystems/>
    },
    {
        name: "Fire Detection/ Fire Fighting System",
        path: "/fireDetection&FireFightingSystem",
        element: <FireDetectionFireFightingSystem/>
    },
    {
        name: "Heat & Smoke Detection",
        path: "/heat&smokeDetection",
        element: <HeatSmokeDetection/>
    },
    {
        name: "Programmable/Non-programmable fire alarm system",
        path: "/programmable-Non-ProgrammableFireAlarmSystem",
        element: <ProgrammableNonProgrammableFireAlarmSystem/>
    },
    {
        name: "Fire Extinguishers",
        path: "/fireExtinguishers",
        element: <FireExtinguishers/>
    },
    {
        name: "Water Sprinklers",
        path: "/waterSprinklers",
        element: <WaterSprinklers/>
    },
    {
        name: "Hydrant & Wet riser systems",
        path: "/hydrant&WetRiserSystems",
        element: <HydrantWetRiserSystems/>
    },
    {
        name: "Maintenance of precision air conditioners/ Thermostat/AHU",
        path: "/maintenanceOfPrecisionAirConditioners-Thermostat&AHU",
        element: <MaintenanceOfPrecisionAirConditionersThermostatAHU/>
    },
    {name: "VRV / VAV", path: "/vrv-vav", element: <VRVVAV/>},
    {name: "HSU", path: "/hsu", element: <HSU/>},
    {name: "Building Management System", path: "/buildingManagementSystem", element: <BuildingManagementSystem/>},
    {name: "AV and PA System", path: "/av&PaSystem", element: <AVAndPASystem/>},
    {name: "Access Control System", path: "/accessControl", element: <AccessControl/>},
    {name: "Visitor Management System", path: "/visitorManagementSystem", element: <VisitorManagementSystem/>},
    {
        name: "Turnstiles / Flap Barrier / Boom Barrier",
        path: "/turnstiles-flapBarrier-boomBarrier",
        element: <TurnstilesFlapBarrierBoomBarrier/>
    },
    {name: "Cafeteria Management", path: "/cafeteriaManagement", element: <CafeteriaManagement/>},
    {
        name: "Biometric Attendance Management Systems",
        path: "/biometricAttendanceManagementSystems",
        element: <BiometricAttendanceManagementSystems/>
    },
    {name: "Automated Parking Management", path: "/automatedParkingManagement", element: <AutomatedParkingManagement/>},
    {
        name: "Vehicle Management through GPRS Solutions",
        path: "/vehicleManagementThroughGPRSSolutions",
        element: <VehicleManagementThroughGPRSSolutions/>
    }
];

export default routes;