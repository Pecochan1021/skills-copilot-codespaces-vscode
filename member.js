function skillsMember() {
  // Get the member's skills from the database
  const member = getMember();
  const skills = member.skills;
  return skills;
}