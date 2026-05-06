# CLAUDE.md - Project Guidelines

## Project Overview

This is the SAMURAI Sprint test-01 project. This document outlines workflows, coding standards, and Git operations for consistent collaboration.

---

## Git Operations & GitHub Workflow

### Core Rule: Push Changes on Every Commit

**All code changes must be pushed to GitHub immediately after committing.**

- After making changes and creating a commit, run: `git push origin <branch-name>`
- Do not accumulate multiple commits locally without pushing
- Each commit should be pushed to keep the remote repository in sync
- This ensures team visibility and prevents conflicts

### Workflow Steps

1. **Create/Switch to Feature Branch**
   ```bash
   git checkout -b feature/description
   ```

2. **Make Changes & Commit**
   ```bash
   git add .
   git commit -m "Clear, descriptive commit message"
   ```

3. **Push to GitHub** (Required on every commit)
   ```bash
   git push origin feature/description
   ```

4. **Create Pull Request** (when feature is complete)
   - Open PR on GitHub from feature branch to main
   - Include clear description of changes
   - Request review from team members

5. **Merge After Approval**
   ```bash
   git merge feature/description
   git push origin main
   ```

### Branch Naming Convention

- `feature/` - New features
- `fix/` - Bug fixes
- `refactor/` - Code refactoring
- `docs/` - Documentation updates

Example: `feature/user-authentication`, `fix/login-validation`

---

## Code Standards

- Write clear, maintainable code
- Include comments only for non-obvious logic
- Keep functions focused and modular
- Ensure type safety where applicable
- Follow the language-specific conventions

---

## Collaboration Notes

- Communicate branch intentions in team channels
- Request reviews before merging to main
- Keep commits atomic and focused
- Use meaningful commit messages (not "fix", "update", etc.)

---

## Setup & Getting Started

1. Clone the repository
2. Create your feature branch
3. Follow the Git workflow outlined above
4. Submit PRs for review

---

## Additional Configuration

This project uses Claude Code for development assistance. Refer to `.claude/settings.json` for tool permissions and environment configurations.

