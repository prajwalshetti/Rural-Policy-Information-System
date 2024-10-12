const express = require("express");
const Policy = require("../models/policy");
const Benificiary = require("../models/benificiary");

const router = express.Router();

// Create a new policy
router.put("/", async (req, res) => {
    try {
        const newPolicy = new Policy(req.body);
        const savedPolicy = await newPolicy.save();
        res.status(201).json(savedPolicy);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to create policy" });
    }
});

// Search a policy by id
router.get("/", async (req, res) => {
    try {
        const { policyId } = req.body;
        const policy = await Policy.findById(policyId);
        res.json(policy);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to get policy" });
    }
});

// Get all policy
router.get("/all", async (req, res) => {
    try {
        const policies = await Policy.find({});
        console.log(policies);
        res.status(201).json(policies);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to get policy" });
    }
});

// Get list of policies a benificiary is eligible for
router.get("/eligible", async (req, res) => {
    try {
        const { beneficiaryId } = req.body;

        if (!beneficiaryId) {
            return res
                .status(400)
                .json({ error: "Beneficiary ID is required" });
        }

        const beneficiary = await Benificiary.findById(beneficiaryId);

        if (!beneficiary) {
            return res.status(404).json({ error: "Beneficiary not found" });
        }

        const policies = await Policy.find({ enabled: true });
        console.log(policies);

        const eligiblePolicies = policies.filter((policy) => {
            return (
                beneficiary.income <= policy.income &&
                (policy.reservation === beneficiary.reservation) &&
                (!policy.marital_status || beneficiary.marital_status) &&
                (!policy.disability || beneficiary.disability) &&
                (!policy.aadhar_status || beneficiary.aadhar_status) &&
                (!policy.pan_status || beneficiary.pan_status) &&
                (!policy.voterid_status || beneficiary.voterid_status) &&
                (!policy.rentagreement_status || beneficiary.rentagreement_status)
            );
        });

        res.json(eligiblePolicies);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to get eligible policies" });
    }
});

// Update details of existing policy
router.post("/update", async (req, res) => {
    try {
        const { policyId, ...update } = req.body;
        const policy = await Policy.findByIdAndUpdate(policyId, update, {
            new: true,
        });
        res.json(policy);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to update policy" });
    }
});

// Filter policies based on query
router.get("/filter", async (req, res) => {
    try {
        const query = req.body;
        query.enabled = true;
        const policies = await Policy.find(query);
        res.json(policies);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to filter policies" });
    }
});

module.exports = router;
