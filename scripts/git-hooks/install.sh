#!/usr/bin/env bash
#
# install.sh — wire this repo's tracked hooks into git
#
# Run once after a fresh clone:
#   ./scripts/git-hooks/install.sh
#
# Sets git's core.hooksPath to scripts/git-hooks (this directory), so the
# tracked prepare-commit-msg hook fires on every commit in this clone.
#
# Safe to re-run; idempotent.
#
# VW-393

set -e

cd "$(git rev-parse --show-toplevel)"

git config core.hooksPath scripts/git-hooks
echo "✓ core.hooksPath = scripts/git-hooks"
echo "  Hooks in scripts/git-hooks/ will now fire on commits in this clone."
echo ""
echo "  Active hooks:"
ls -1 scripts/git-hooks/ | grep -v '\.sh$' | sed 's/^/    /'
