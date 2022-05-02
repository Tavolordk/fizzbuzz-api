const ExplorerService = require("../lib/services/ExplorerService");



describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(2);
    });

    test("Requerimiento 2: Dame todos los explorers de una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode).not.toBeUndefined();
    });

    test("Requerimiento 3: Dame todos los usuarios en una misión", () => {
        const explorers = [{mission: "node", githubUsername:"Tavolordk"}];
        const explorersInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(explorersInNode).not.toBeUndefined();
    });

});