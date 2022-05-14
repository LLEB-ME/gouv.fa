# wiki

0. Install [Zola](https://getzola.org)
1. Make changes on a new branch unless minor
2. Use `zola serve` to make sure it actually works
3. Use `zola build` to make sure it actually works works
4. Make a PR with those changes
5. ???
6. Profit.

### for staff
0. normal setup
1. [setup a git remote for 
`100.80.243.84:/srv/repos/help.fa`](https://www.maatt.ch/blog/aws-to-1984/#git-hooks-the-secret-sauce-to-having-a-sane-deploy)
2. push to `prod` when ready for production. push to `origin` or `gh` when not.
   - If you push to prod, read the console output. It will tell you if the build fails or not.
