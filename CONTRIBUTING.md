# Contributing to Jukhunant 🍷📜

> *"Any sufficiently advanced friendship is indistinguishable from a GitHub repository."*
> — probably Arthur C. Clarke, after one Riesling too many

Welcome, esteemed member of the **Jukhunant Travel Consortium™**. So you have an opinion on the itinerary. Excellent. Opinions are like Grand Cru parcels — everyone has one and they're all subtly different.

To preserve the integrity of our holy planning document (`index.html`), the constitutional bylaws of this repository require that **all proposed changes be submitted via Pull Request**. Verbal suggestions in WhatsApp will be acknowledged with a 👍 and then cheerfully forgotten.

---

## 📜 The Articles of Contribution

### Article I — Eligibility
Contributors to this repository must be one of the following:

- [x] **Juup** — Repository Steward & Driver-in-Chief
- [x] **Anant** — Cultural Attaché & Map Navigator
- [x] **Sukhuma** — Foodie Scout & Photographer

Honorary contributions from sentient wine bottles will be considered on a case-by-case basis.

### Article II — The Sacred Workflow

1. **Fork** is forbidden. We are friends, not strangers. Clone directly.
   ```bash
   git clone https://github.com/JuupHietbrink/jukhunant.git
   cd jukhunant
   ```
2. **Branch** with a name that hints at your scheme:
   ```bash
   git checkout -b anant/add-michelin-detour
   git checkout -b sukhuma/replace-monday-with-spa
   ```
3. **Commit** with messages that future-you will not be embarrassed by:
   ```bash
   git commit -m "feat(itinerary): add cheese cellar visit on Saturday"
   ```
4. **Push** and **open a Pull Request** against `main`.
5. **Await review.** At least **one (1)** other crew member must approve before merge. Self-merging is a federal offence punishable by paying for the next round of Crémant.

### Article III — What you may propose

| ✅ Encouraged | ⚠️ Requires Strong Justification | ❌ Will Be Closed With Prejudice |
|---|---|---|
| Better restaurants | Replacing wine tastings | Cancelling the trip |
| Cooler villages | Adding a 5am hike | Suggesting we rent bicycles instead of the car |
| Typo fixes | Working on Tuesday too | Removing Sukhuma's photography section |
| Better photos | Skipping Strasbourg | Anything involving karaoke |

### Article IV — Pull Request Etiquette

- **Title** must begin with a tasteful emoji. 🍷 🏰 🥨 🚗 are all acceptable. 🤡 only for self-deprecation.
- **Description** must include:
  - *What* you are proposing
  - *Why* (preferably with a citation, e.g. *"per TripAdvisor reviewer JeanPierre42"*)
  - *Estimated impact on wine budget* in EUR
- **Screenshots** are encouraged for visual changes. Bonus points for screenshots taken at a vineyard.

### Article V — Code Review Standards

Reviewers shall evaluate PRs against the following criteria:

- 🍷 **Vinosophical soundness** — does this enhance our wine experience?
- 🏛️ **Cultural integrity** — are we still doing real culture or just Instagram?
- 💻 **Monday-morning compatibility** — does this break our work block?
- 🚗 **Logistical feasibility** — can the car physically reach this place?
- 😎 **Vibe coefficient** — does it spark joy?

A passing PR scores ≥ 3/5. The Vibe Coefficient may, at the reviewer's discretion, override all other criteria.

### Article VI — Conflict Resolution

In the event of a merge conflict between crew members, resolution shall proceed in this order:

1. Discuss in the PR comments using complete sentences.
2. If unresolved, hold a **Voice Note Tribunal** in the group chat.
3. If still unresolved, the matter is settled by a blind tasting of two wines selected by the disputing parties. The chooser of the preferred wine wins the dispute. The loser writes the next commit message.

### Article VII — The Definition of Done

A PR is **mergeable** when:

- ✅ The site still loads on GitHub Pages
- ✅ At least one other crew member has approved
- ✅ No member has invoked the **Veto of Last Resort** (limit: one per person per trip)
- ✅ The proposed change does not violate the laws of France or the laws of physics

---

## 🛠️ Local development

No build step. Open `index.html` in your browser and refresh. That's it. We are not animals.

For a slightly nicer experience:
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## 🙏 Final word

Remember: this repo is not just a website. It is a **monument** to the fact that three engineers cannot plan a holiday without inventing a software development lifecycle for it.

Now go forth and `git push`. 🍇

— *The Jukhunant Repository Steward*
